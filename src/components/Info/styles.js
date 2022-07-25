import styled from 'styled-components'

export const FinancialData = styled.div `
	width: 99%;
	height: 40px;

	margin-top: 5px;
	align-self: center;
	display: flex;
	gap: 155px;

	background-color: #A8A8A0;
`
export const BoxOne = styled.div `
	width: 50%;
	height: 100%;

	display: flex;
	align-items: center;
	gap: 80px;
	margin-left: 10px;

	div {
		font-size: 12px;
		font-weight: 700;

		display: flex;
		align-items: center;
		padding-top: 1px;
		gap: 5px;

		div {
			background-color: #D0D0D0;
		}
	}

	p {
		font-size: 14px;
		font-weight: 700;
		width: 110px;

		color: #0000b3;
		background-color: #D0D0D0;
	}
`

export const BoxTwo = styled.div `
	width: 50%;
	height: 100%;

	display: flex;
	align-items: center;
	gap: 60px;

	div {
		font-size: 12px;
		font-weight: 700;

		display: flex;
		align-items: center;
		padding-top: 1px;
		gap: 5px;

		div {
			background-color: #D0D0D0;
		}
	}

	p {
		font-size: 14px;
		font-weight: 700;
		width: 110px;

		color: #0000b3;
		background-color: #D0D0D0;
	}

`

export const Status = styled.div `
	width: 99%;
	height: 30px;

	display: flex;
	align-self: center;
	align-items: center;
	justify-content: space-between;
`

export const Block = styled.div `
	display: flex;
	gap: 5px;
	align-items: center;

	p {
		font-size: 11px;
		font-weight: 500;
	}
`

export const Blue = styled.div `
	width: 39px;
	height: 10px;

	background-color: blue;
	border: 2px solid white;
`

export const Red = styled.div `
	width: 39px;
	height: 10px;
	
	background-color: Red;
	border: 2px solid white;
`

export const Grey = styled.div `
	width: 39px;
	height: 10px;

	background-color: #A0A0A8;
	border: 2px solid white;
`

export const FinalBalance = styled.div `
	font-size: 14px;
	font-weight: 600;

	align-self: flex-end;
`

export const Value = styled.div `
	width: 140px;
	height: 23px;
	font-weight: 600;
	font-size: 14px;

	display: flex;
	justify-content: flex-end;
	margin-top: 2px;
	padding-right: 2px;
	
	color: grey;
	background-color: white;
	border: groove;
	border-left: 2px solid #303838;
	border-top: 2px solid #303838;
	
`