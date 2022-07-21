import { Container, PreviousBalance, Titles, Status, BoxOne, BoxTwo } from './styles.js'

import Table from '../Table'
import SecondaryTable from '../SecondaryTable'

export const BankData = () => {
	return (
		<Container>

			<PreviousBalance>
				Saldo Anterior: <p>0,00</p>
			</PreviousBalance>

			<Titles>
				<p style={{ marginLeft: 50 }}>Movimento Financeiro</p>

				<p style={{ marginRight: 185 }} >Extrato Bancário</p>
			</Titles>

			<Status>
				<BoxOne>
					<Table />
				</BoxOne>

				<BoxTwo>
					<SecondaryTable />
				</BoxTwo>
			</Status>

		</Container>
	)
}