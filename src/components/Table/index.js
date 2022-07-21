import { Information, Data, Block } from './styles.js'

export default function Table() {
	return (
		<div>

			<Information>
				
				<div></div>

				<table>
					<tr>
						<td>Documento</td>
					</tr>
					<tr style={{ paddingRight: 25 }} >
						<td>Emissão</td>
					</tr>

					<tr style={{ paddingLeft: 50 }}>
						<td>Valor</td>
					</tr>
					<tr style={{ paddingRight: 175 }} >
						<td>Descrição</td>
					</tr>
					<tr style={{ paddingLeft: 10, paddingRight: 10 }} >
						<td>Conciliar</td>
					</tr>
				</table>

			</Information>

			<div style={{ display: 'flex' }} >
				<Block></Block>

				<Data>
					<tr style={{ paddingLeft: 61, borderLeft: 'black' }} >
						<td></td>
					</tr>
					<tr style={{ paddingRight: 72 }} >
						<td></td>
					</tr>

					<tr style={{ paddingLeft: 78 }}>
						<td></td>
					</tr>
					<tr style={{ paddingRight: 230 }} >
						<td></td>
					</tr>
					<tr style={{ paddingRight: 68 }} >
						<td></td>
					</tr>
				</Data>
			</div>
		</div>
	)
}