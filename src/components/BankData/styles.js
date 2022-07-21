import styled from 'styled-components'

export const Container = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const PreviousBalance = styled.div `
	display: flex;
	align-self: flex-start;
	gap: 5px;
	font-size: 16px;
	margin-left: 5px;

	font-weight: 700;

	p {
		color: blue;
	}
`

export const Titles = styled.div `
	width: 99%;
	display:flex;
	justify-content: space-around;
	margin-top: 10px;
	padding: 5px;

	background-color: #A8A8A0;

	P {
		background-color: #D0D0D0;
		font-weight: 700;
	}
`

export const Status = styled.div `
	width: 99%;
	height: 400px;
	display:flex;
	justify-content: space-around;
	gap: 16px;
	margin-top: 3px;
`

export const BoxOne = styled.div `
	width: 50%;
	display: flex;

	border: groove;
	border-top: 2px solid #303838;
	border-left: 2px solid #303838;
	background-color: white;
	
	p {
		font-size: 13px;
		font-weight: 400;

		height: 20px;

		background-color: #D0D0D0;
		border: groove;
	}
`

export const BoxTwo = styled.div `
	width: 50%;
	
	border: groove;
	border-top: 2px solid #303838;
	border-left: 2px solid #303838;
	background-color: white;
`