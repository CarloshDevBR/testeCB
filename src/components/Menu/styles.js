import styled from 'styled-components'

export const FileRemove = styled.div `
	position: absolute;
	left: 290px;
	top: 33px;
	padding: 1px 3px 1px 3px;
	font-size: 12px;

	background-color: #EFEFEF;
	border: groove;
	border-left: 2px solid #303838;
	border-top: 2px solid #303838;
	cursor: pointer;

	&:hover{
		opacity: .7;
	}

	&:active{
		opacity: .3;
	}
`

export const Modal = styled.div `
	padding: 10px;

	display: flex;
	flex-direction: column;
	position: absolute;
	left: 20px;
	top: 20px;
	z-index:2;

	background: rgb(175,175,187);
	background: linear-gradient(90deg, rgba(175,175,187,1) 0%, rgba(158,166,170,0.9136029411764706) 100%, rgba(0,212,255,1) 100%);
	border: groove;
	border-radius: 5px;
	border-left: 2px solid #303838;
	border-top: 2px solid #303838;

	p {	
		align-self: flex-end;
		font-weight: 700;
		cursor: pointer;
	}
`

export const Erros = styled.div `
	padding: 5px;
	color: red;
	gap: 10px;
	
	p {
		font-size: 10px;
		font-weight: 700;
		margin-bottom: 15px;
		padding: 5px;
		border-bottom: 2px solid grey;
	}
`

export const Sucess = styled.div `	
	padding: 5px;
	color: green;
	gap: 10px;
	
	p {
		font-size: 10px;
		font-weight: 700;
		margin-bottom: 15px;
		padding: 5px;
		border-bottom: 2px solid grey;
	}
`

export const UploadFiles = styled.div `
	height: 50px;
	width: 20%;

	display: flex;
	align-items: center;
	margin: 5px 0 5px 20px;
	gap: 10px;
	padding: 0 5px 0 5px;

	border: groove;

	label {
		width: 200px;
		font-size: 14px;
		font-weight: 400;

		text-align: center;

		border-radius: 5px;
		background-color: #A8A8A0;
		border: groove;
		border-left: 2px solid #303838;
		border-top: 2px solid #303838;

		cursor: pointer;

		&:hover{
			opacity: .7;
		}

		&:active{
			opacity: .3;
		}

	}

	button {
		width: 200px;
		font-weight: 400;

		border-radius: 5px;
		border: groove;
		border-left: 2px solid #303838;
		border-top: 2px solid #303838;

		cursor: pointer;

		&:hover{
			opacity: .7;
		}

		&:active{
			opacity: .3;
		}
`

export const Container = styled.div `
	width: 100%;
	height: 95px;

	display: flex;	
	align-items: center;
	justify-content: space-evenly;
	gap: 8px;
`

export const FinancialAccount = styled.form `
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

		transform: translateY(-32px);
		position: absolute;
		margin-right: 425px;
		padding: 0 3px 0 3px;

		background-color: #D0D0D0;
		font-size: .8rem;
		color: #0000b3;
	}
`

export const SearchBox = styled.div `
	display: flex;
	
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

export const DataReconciliation = styled.form `
	height: 70px;
	padding: 8px;
	
	display: grid;
	place-items: center;
	
	border: groove;

	h3 {
		font-size: 12px;
		font-weight: 500;
		
		transform: translateY(-32px);
		position: absolute;	
		margin-right: 30px;
		padding: 0 3px 0 3px;
		
		background-color: #D0D0D0;
		color: #0000b3;
	}

	input {
		width: 120px;

		border: groove;
		color: #0000b3;
		border-left: 2px solid #303838;
		border-top: 2px solid #303838;

	}
`

export const MovementPeriod = styled.form `
	height: 70px;

	display: flex;
	align-items: center;
	padding: 0 8px 0 8px;
	gap: 4px;
	
	border: groove;

	h3 {
		font-size: 12px;
		font-weight: 500;
		
		transform: translateY(-32px);
		position: absolute;
		background-color: #D0D0D0;
		margin-right: 40px;
		padding: 0 3px 0 3px;

		color: #0000b3;
	}

	label {
		margin-bottom: 8px;
		width: 12px;
		height: 10px;

		cursor: pointer;
	}

`

export const BoxDate = styled.div `
	display: flex;
	align-items: center;
	gap: 5px;
	
	input {	
		width: 120px;
		height: 22px;

		border: groove;
		color: #0000b3;

		border-left: 2px solid #303838;
		border-top: 2px solid #303838;
	}

	p {
		color: #0000b3; 
		font-size: 12px;
	}

`

export const Reconcile = styled.form `
	height: 70px;

	display: grid;
	place-items: center;
	padding: 8px;
	
	border: groove;

	h3 {
		font-size: 12px;
		font-weight: 500;
		
		transform: translateY(-32px);
		position: absolute;
		margin-right: 80px;
		padding: 0 3px 0 3px;

		background-color: #D0D0D0;
		color: #0000b3;
	}

	select {
		width: 130px;

		background-color: white;
		border: groove;
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
