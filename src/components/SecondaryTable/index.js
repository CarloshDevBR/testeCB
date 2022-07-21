import { Information, Data, Block } from './styles.js'

export default function Table() {
	return (
		<div>

			<Information>
				
				<div></div>

				<table>
					<tr style={{ paddingRight: 25 }}>
						<td>Conciliar</td>
					</tr>
					<tr style={{ paddingRight: 25 }} >
						<td>Número</td>
					</tr>

					<tr style={{ paddingRight: 5 }}>
						<td>Movimento</td>
					</tr>
					<tr style={{ paddingLeft: 35 }} >
						<td>Valor</td>
					</tr>
					<tr style={{ paddingRight: 120 }} >
						<td>Descrição</td>
					</tr>
				</table>

			</Information>

			<div style={{ display: 'flex' }} >
				<Block></Block>

				<Data>
					<tr style={{ paddingLeft: 72, borderLeft: 'black' }} >
						<td></td>
					</tr>
					<tr style={{ paddingRight: 68 }} >
						<td></td>
					</tr>

					<tr style={{ paddingLeft: 65 }}>
						<td></td>
					</tr>
					<tr style={{ paddingRight: 63 }} >
						<td></td>
					</tr>
					<tr style={{ paddingRight: 176 }} >
						<td></td>
					</tr>
				</Data>
			</div>
		</div>
	)
}