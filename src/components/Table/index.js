import { useState } from 'react'
import { Titles, Data, Block } from './styles.js'

export default function Table() {
	const [ data ] = useState()

	return (
		<div>

			<Titles>
				
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

			</Titles>

			{
				data ? data.map(info => (
					<div style={{ display: 'flex' }} >
						<Block></Block>

						<Data>
							<tr style={{ borderLeft: 'black', width: 66 }} >
								<td></td>
							</tr>
							<tr style={{ width: 77, justifyContent: 'flex-start' }} >
								<td></td>
							</tr>
							<tr style={{ width: 83, justifyContent: 'flex-end' }} >
								<td></td>
							</tr>
							<tr style={{ width: 235, justifyContent: 'flex-start' }} >
								<td></td>
							</tr>
							<tr style={{ width: 72 }}>
								<td></td>
							</tr>
						</Data>
					</div>
				))

				:

				<div style={{ display: 'flex' }} >
						<Block></Block>

						<Data>
							<tr style={{ borderLeft: 'black', width: 66 }} >
								<td></td>
							</tr>
							<tr style={{ width: 77 }} >
								<td></td>
							</tr>
							<tr style={{ width: 83 }} >
								<td></td>
							</tr>
							<tr style={{ width: 235 }} >
								<td></td>
							</tr>
							<tr style={{ width: 72 }}>
								<td></td>
							</tr>
						</Data>
					</div>
			}

		</div>
	)
}