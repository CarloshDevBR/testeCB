import { Container, FinancialAccount, SearchBox, SearchBar, DataReconciliation, MovementPeriod, Reconcile, Consult } from './styles.js'

import { FcSearch } from 'react-icons/fc'
import { ImBinoculars } from 'react-icons/im'

export const Menu = () => {
	return(
		<Container>

			<FinancialAccount>
				<h3>Conta Financeira</h3>

				<SearchBox>
					<input type="search" />
					<button>{ <FcSearch style={{ width: 20 }} /> }</button>
				</SearchBox>

				<SearchBar type="text" />
			</FinancialAccount>

			<DataReconciliation>
				<h3>Data conciliação</h3>

				<input type="date" />
			</DataReconciliation>


			<MovementPeriod>
				<h3>Período de Movimento</h3>

				<input type="date" />
					<p style={{ color: 'blue', fontSize: 12 }} >a</p>
				<input type="date" />
			</MovementPeriod>


			<Reconcile>
				<h3>Conciliar</h3>
				
					<select>
						<option>Movimento</option>
						<option>2</option>
						<option>3</option>
					</select>
				
			</Reconcile>

			<Consult>
				<ImBinoculars />

				<p>Consultar</p>
			</Consult>

		</Container>
	)
}
