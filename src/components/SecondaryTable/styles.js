import styled from 'styled-components'

export const Titles = styled.div `
	display: flex;

	table {
		display: flex;
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
	transform: translateX(-.7px);

	border: 1px groove;
	border-top: none;
	border-left: none;
	
	tr {
		display: flex;
		justify-content:center;
		align-items: center;
		
		padding: 2px;
		font-size: 11px;
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