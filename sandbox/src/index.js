import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Box,
  Button,
  Divider,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const modeDescriptions = [
  "0. 클릭한 항목을 핑크색으로 만든다. 같은 항목을 다시 클릭하면 파란색으로 만든다.",
  "1. 클릭한 항목을 삭제한다.",
  "2. 클릭한 항목과 핑크색 항목의 위치를 서로 바꾼다.",
  "3. 기존 숫자들과 중복되지 않으면서 클릭한 숫자보다 큰 최소 자연수를, 클릭한 항목의 바로 다음자리에 삽입한다."
];

function App() {
  const [mode, setMode] = useState(0);
  const [numbers, setNumbers] = useState({
    arr: [1, 2, 3, 4, 5],
    prevArr: [1, 2, 3, 4, 5],
    state: false
  });
  const [prevClickedNumber, setLastClickedNumber] = useState(null);
  const [modify, setModify] = useState(false);
  const [darkmode,setDarkmode]=useState(false); 
  let order, num;

  const handleChangeMode = e => setMode(Number(e.target.value));
  const handleClickNumber = clickedNumber => () => {
    switch (mode) {
      case 0:
        // 0. 마지막으로 클릭한 항목을 핑크색으로 만든다. 같은 항목을 다시 클릭하면 파란색으로 만든다.
        if (prevClickedNumber !== clickedNumber) {
          setLastClickedNumber(clickedNumber);
        } else {
          setLastClickedNumber(null);
        }
        break;
      case 1:
        // 1. 클릭한 숫자를 삭제한다.
        // (예: [1, 2, 3, 4, 5] 에서 4를 삭제하면 [1, 2, 3, 5]가 되어야 함)
        setNumbers({...numbers, prevArr: numbers.arr, state: false });
        setNumbers({...numbers, arr:[...numbers.arr.filter(n => n !== clickedNumber)]});
        break;
      case 2:
        // 2. 클릭한 항목과 핑크색 항목의 위치를 서로 바꾼다.
        if (prevClickedNumber === null) {
          setLastClickedNumber(clickedNumber);
        } else {
          let i = [];
          i = i.concat(numbers.arr);
          i[numbers.arr.indexOf(prevClickedNumber)] = clickedNumber;
          i[numbers.arr.indexOf(clickedNumber)] = prevClickedNumber;
          setNumbers({arr:i, prevArr: numbers.arr, state: false });
          setLastClickedNumber(null);
        }
        break;
      case 3:
        // 3. 기존 숫자들과 중복되지 않으면서 클릭한 숫자보다 큰 최소 자연수를, 클릭한 숫자의 바로 다음자리에 삽입한다.
        // (예: [1, 2, 3, 5] 에서 2를 클릭하면
        //      3은 이미 있고 4가 없으므로 4를 2 다음에 삽입해서
        //      [1, 2, 4, 3, 5]가 되어야 함)
        let i = [];
        i = i.concat(numbers.arr.slice(0, numbers.arr.indexOf(clickedNumber) + 1));
        let less_num = clickedNumber + 1;
        for (let k = 0; k < numbers.arr.length; k++) {
          if (numbers.arr[k] === less_num) {
            less_num++;
            k = -1;
          }
        }
        i.push(less_num);
        i = i.concat(numbers.arr.slice(numbers.arr.indexOf(clickedNumber) + 1));
        setNumbers({arr:i, prevArr: numbers.arr, state: false });
        break;
      default:
        break;
    }
  };
  const NumBtn = () => {
    const numBtn = numbers.arr.map(number => {
      return (
        <Grid item key={number}>
          <Button
            variant="contained"
            color={number === prevClickedNumber ? "secondary" : "primary"}
            onClick={handleClickNumber(number)}
          >
            {number}
          </Button>
        </Grid>
      );
    });

    return numBtn;
  };
  const onclick_modify = () => {
    if (modify && order < numbers.arr.length) {
      let i = [];
      let check = [];
      let orderNumber = Number(order);
      let numNumber = Number(num);
      i = i.concat(numbers.arr.slice(0, orderNumber));
      i.push(numNumber);
      i = i.concat(numbers.arr.slice(orderNumber + 1, numbers.length));
      
      // 3번째문제를 해결하기 위해 check에 넣은 후 정렬
      check = check.concat(i);
      check.sort();
      if (check[check.indexOf(numNumber)] !== check[check.indexOf(numNumber) + 1]) {
        setNumbers({arr:i, prevArr: numbers.arr, state: false });
        i = [];
        setModify(!modify);
      } else {
        alert("항목들에 없는 값을 입력하세요.");
      }
    } else if (order >= numbers.length) {
      alert("위치를 찾을 수 없습니다.");
    } else if (!modify) {
      setModify(!modify);
    }
  };
  const onchage = (e, v) => {
    if (v === "order") {
      order = e.target.value;
    } else if (v === "num") {
      num = e.target.value;
    }
  };
  const onclick_reset = () => {
    setNumbers({  arr: numbers.prevArr, prevArr:numbers.arr, state: !numbers.state });
  };

  const onclick_theme = () =>{
    setDarkmode(!darkmode);
  }

  const theme = createMuiTheme({
    palette: {
      type: darkmode? 'dark':'light',
    },
  });
  const style = 
  darkmode? ({
    backgroundColor:'rgb(33, 33, 33)',
    color:'#fff'
  }):({
    
  });


  return (
    <div  style={style}>
      <ThemeProvider theme={theme}>
        <p>
          <Typography variant="body1">
            답안 작성 및 저장 후, 새로 fork된 Sandbox URL을
            chanil@limesociety.com으로 제출하시면 됩니다.
            <br />
            제시된 템플릿 코드는 얼마든지 수정하셔도 좋습니다.
          </Typography>
        </p>
        <Divider />
        <p>
          <FormControl>
            <button onClick={()=>onclick_theme()}>
              {darkmode? 'light mode':'dark mode'}로 변경
            </button>
            <button
              onClick={() => {
                onclick_reset();
              }}
            >
              {numbers.state ? "다시실행" : "실행취소"}
            </button>
            <button onClick={() => onclick_modify()}>
              {!modify ? "수정" : "수정완료"}
            </button>
            {!modify ? (
              <div />
            ) : (
              <form id="numChange">
                <input
                  type="number"
                  onChange={e => {
                    onchage(e, "order");
                  }}
                  placeholder="왼쪽  0번부터 변경타겟"
                />
                <input
                  type="number"
                  id="num"
                  onChange={e => {
                    onchage(e, "num");
                  }}
                  placeholder="변경 숫자"
                />
              </form>
            )}
            <FormLabel component="p">항목들</FormLabel>
            <Grid container spacing={1}>
              <NumBtn />
            </Grid>
          </FormControl>
        </p>
        <Divider />
        <p>
          <Typography variant="body1">
            <b>[문제 A]</b> 0~1번 모드만 동작하는 원본 코드를 수정해서, 2~3번
            모드들도 동작하게 만드십시오.
          </Typography>
        </p>
        <p>
          <FormControl>
            <FormLabel>모드 선택</FormLabel>
            <RadioGroup onChange={handleChangeMode} value={mode}>
              {modeDescriptions.map((description, idx) => (
                <Grid item key={idx}>
                  <FormControlLabel
                    key={idx}
                    value={idx}
                    control={<Radio />}
                    label={<Typography>{description}</Typography>}
                  />
                </Grid>
              ))}
            </RadioGroup>
            <FormHelperText />
          </FormControl>
        </p>
        <Divider />
        <p>
          <Typography variant="body1">
            <b>[문제 B]</b> 항목들의 숫자들을 직접 편집할 수 있도록 만드십시오. 이
            때 중복을 허용하지 않아야 합니다.
          </Typography>
        </p>
        <Divider />
        <p>
          <Typography variant="body1">
            <b>[문제 C]</b> 중복 체크를 할 때 기존 항목들을 일일이 검사하지 않고도
            동작하는 프로그램 로직을 구현하십시오.
          </Typography>
        </p>
        <Box position="fixed" bottom={0} left={0}>
          <ExpansionPanel>
            <ExpansionPanelSummary>
              <Button variant="outlined" color="secondary">
                보너스 문제
              </Button>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant="body1">
                <ol>
                  <li>
                    numbers의 변경(삽입, 삭제, 재배열, 원소변경 등)에 대한
                    실행취소/다시실행 버튼을 구현해 보세요.
                  </li>
                  <li>
                    페이지 전체에 Material-UI의 dark mode가 적용되도록 만들어
                    보세요.
                  </li>
                </ol>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Box>
      </ThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
