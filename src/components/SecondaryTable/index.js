import { Titles, Data, Block } from './styles.js'

import { useData } from '../../hooks/DataContext.js'

import Moment from 'moment'

export default function Table() {
	const { data } = useData()

	return (
		<div>

			<Titles>
				
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
					<tr style={{ paddingRight: 174 }} >
						<td>Descrição</td>
					</tr>
				</table>

			</Titles>

			{ 
				data ? data.map( info => (

					<div style={{ display: 'flex' }} key={info.id} >
						<Block></Block>

						<Data>
							<tr style={{ borderLeft: 'black', width: 77, justifyContent: 'flex-start' }} >
								<td>{info.id}</td>
							</tr>
							<tr style={{ width: 73, justifyContent: 'flex-start' }} >
								<td>{info.banco}</td>
							</tr>
							<tr style={{ width: 70 }} >
								<td>{Moment(info.data_transacao).format('DD-MM-YYYY')}</td>
							</tr>
							<tr style={{ width: 68, justifyContent: 'flex-end' }} >
								<td>{info.valor}</td>
							</tr>
							<tr style={{ width: 235, justifyContent: 'flex-start', fontSize: '50%' }}>
								<td>{info.desc_lanc}</td>
							</tr>
						</Data>
					</div>

					))

					:

					<div style={{ display: 'flex' }} >
						<Block></Block>

						<Data>
							<tr style={{ borderLeft: 'black', width: 77 }} >
								<td></td>
							</tr>
							<tr style={{ width: 73 }} >
								<td></td>
							</tr>
							<tr style={{ width: 70, justifyContent: 'flex-end', paddingRight: 2 }} >
								<td></td>
							</tr>
							<tr style={{ width: 68, justifyContent: 'flex-start', paddingLeft: 4 }} >
								<td></td>
							</tr>
							<tr style={{ width: 235 }}>
								<td></td>
							</tr>
						</Data>
					</div>
			}

			
		</div>
	)
}