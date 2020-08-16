import React from 'react';
import Circle from './circle';
import './main.scss';



const BackGround =() =>{
    
// color = white /yellow
// left, right => vw
// deg => 시초선을 기준으로 시계방향(cw)
// length=> 몇 vh 이동할것인가(기본 30)
// time => 몇초 왕복할것인가? (기본10s)
// children => 1/2/3(크기)
    
    return <div id='bg'>
        <Circle color={'yellow'} left = {5}top={80} deg={-60}>1</Circle>
        <Circle color={'yellow'} left = {90}top={34} deg={180}>2</Circle>
        <Circle color={'white'} left = {34}top={81} deg={34}>2</Circle>
        <Circle color={'yellow'} left = {62}top={62} deg={90}>2</Circle>
        <Circle color={'white'} left = {3}top={4} deg={90}>3</Circle>
        <Circle color={'white'} left = {66}top={0} deg={130}>2</Circle>
        <Circle color={'white'} left = {90}top={34} deg={108}>2</Circle>
        <Circle color={'yellow'} left = {65}top={73} deg={200}>3</Circle>
        <Circle color={'yellow'} left = {99}top={1} deg={160}>2</Circle>
        <Circle color={'white'} left = {68}top={40} deg={-30}>2</Circle>
        <Circle color={'white'} left = {85}top={21} deg={34}>2</Circle>
        <Circle color={'yellow'} left = {98}top={41} deg={223}>2</Circle>
        <Circle color={'white'} left = {14}top={28} deg={34}>2</Circle>
        <Circle color={'yellow'} left = {5}top={25} deg={102}>2</Circle>
        <Circle color={'yellow'} left = {47}top={18} deg={60}>2</Circle>
        <Circle color={'yellow'} left = {68}top={4} deg={210}>3</Circle>
        <Circle color={'yellow'} left = {49}top={73} deg={2}>2</Circle>
        <Circle color={'white'} left = {57}top={83} deg={117}>2</Circle>
        <Circle color={'yellow'} left = {88}top={13} deg={34}>2</Circle>
        <Circle color={'white'} left = {59}top={66} deg={77}>1</Circle>
        <Circle color={'white'} left = {94}top={57} deg={34}>2</Circle>
        <Circle color={'white'} left = {5}top={52} deg={34}>2</Circle>
    </div>
}

export default BackGround;