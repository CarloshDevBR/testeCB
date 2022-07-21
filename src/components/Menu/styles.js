import styled from 'styled-components'

export const Container = styled.div `
	width: 100%;
	height: 95px;
	gap: 8px;

	display: flex;
	align-items: center;
	justify-content: space-evenly;
`

export const FinancialAccount = styled.div `
	height: 70px;
	width: 550px;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;

	border: groove;

	h3 {
		font-size: 12px;
		font-weight: 500;

		align-self: flex-start;
		transform: translateY(-10px);
		position: absolute;
		margin-right: 425px;
		padding: 0 3px 0 3px;

		background-color: #D0D0D0;
		font-size: .8rem;
		color: blue;
	}
`

export const SearchBox = styled.div `
	display: flex;
	justify-content: center;
	align-items: center;
	justify-content: space-around;

	border: groove;
	border-left: 2px solid #303838;
	border-top: 2px solid #303838;

	input {
		height: 21px;
		width: 60px;
		
		padding-left: 1px;

		border: none;
	}

	button {
		border-left: groove;
		border-top: 1px solid #303838;
		background-color: #D0D0D0;
		cursor: pointer;
	}

`

export const SearchBar = styled.input `
	width: 430px; 
	height: 26px; 
	border: groove;
	border-left: 2px solid #303838;
	border-top: 2px solid #303838;
`

export const DataReconciliation = styled.div `
	height: 70px;
	padding: 8px;
	
	display: grid;
	place-items: center;
	
	border: groove;

	h3 {
		font-size: 12px;
		font-weight: 500;
		
		align-self: flex-start;
		transform: translateY(-17px);
		position: absolute;	
		margin-right: 30px;
		padding: 0 3px 0 3px;
		
		background-color: #D0D0D0;
		color: blue;
	}

	input {
		width: 120px;

		border: groove;
		color: blue;

		border-left: 2px solid #303838;
		border-top: 2px solid #303838;

	}

	input[type="date"]::-webkit-inner-spin-button,
	input[type="date"]::-webkit-calendar-picker-indicator {
    	display: none;
    	-webkit-appearance: none;
	}
`

export const MovementPeriod = styled.div `
	height: 70px;

	display: flex;
	align-items: center;
	gap: 10px;
	padding: 8px;
	
	border: groove;

	h3 {
		font-size: 12px;
		font-weight: 500;
		
		align-self: flex-start;
		transform: translateY(-17px);
		position: absolute;
		background-color: #D0D0D0;
		margin-right: 40px;
		padding: 0 3px 0 3px;

		color: blue;
	}

	input {	
		width: 120px;
		height: 22px;

		border: groove;
		color: blue;

		border-left: 2px solid #303838;
		border-top: 2px solid #303838;

	}

	input[type="date"]::-webkit-inner-spin-button,
	input[type="date"]::-webkit-calendar-picker-indicator {
    	display: none;
    	-webkit-appearance: none;
	}
`

export const Reconcile = styled.div `
	height: 70px;

	display: grid;
	place-items: center;
	padding: 8px;
	
	border: groove;

	h3 {
		font-size: 12px;
		font-weight: 500;
		
		align-self: flex-start;
		transform: translateY(-17px);
		position: absolute;
		margin-right: 80px;
		padding: 0 3px 0 3px;

		background-color: #D0D0D0;
		color: blue;
	}

	select {
		width: 130px;
		background-color: white;

		border-left: 2px solid #303838;
		border-top: 2px solid #303838;
	}

`

export const Consult = styled.button `
	height: 70px;

	border: groove;
	text-align: center;
	padding: 5px;

	background-color: #D0D0D0;

	border-top: 2px solid #D8D8D8;
	border-left: 2px solid #D8D8D8;
	border-right: 2px solid #303838;
	border-bottom: 2px solid #303838;

	p {
		font-size: 13px;

		&:first-letter {
			border-bottom: 2px solid black;
		}
	}

	&:hover {
		cursor: pointer;
		opacity: .9;
	}

	&:active {
		opacity: .5;
	}

`
