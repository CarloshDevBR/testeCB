import styled from 'styled-components'

export const Information = styled.div `
	display: flex;

	table {
		display: flex;
		transform: translateY(-.5px);
		transform: translateX(-.5px);
		position: absolute;
		margin-left: 14px;

		border: 2px solid #303838;
		border-top: none;
		border-left: none;
		background-color: #D0D0D0;

		tr {
			border-left: 2px solid #303838;
		}

		td {
			font-size: 12px;
		}
	}

	div {
		height: 20px;
		width: 14px;
		transform: translateX(-.2px);

		background-color: #D0D0D0;
		border-bottom: 2px solid #303838;
	}
`

export const Data = styled.table `
	display: flex;
	transform: translateX(2px);
	position: absolute;
	margin-left: 14px;

	border: 1px groove;
	border-top: none;
	border-left: none;
	
	tr {
		border-left: 1px groove;
	}

	td {
		height: 15px;
	}	
`

export const Block = styled.div `
	height: 20px;
	width: 16px;
	transform: translateX(-.2px);

	background-color: #D0D0D0;
	border-bottom: 2px solid #303838;
	border-right: 2px solid #303838;
`