import { FinancialData, BoxOne, BoxTwo, Status, Block, Blue, Red, Grey, FinalBalance, Value } from './styles.js'

export const Info = () => {
	return (
		<>
			<FinancialData>
				<BoxOne>
					<div>
						<div>Total Financeiro :</div> <p>0,00</p> 
					</div>

					<div>
						<div>Diferença Financeiro :</div> <p>0,00</p> 
					</div>
				</BoxOne>

				<BoxTwo>
					<div>
						<div>Diferença Extrato :</div> <p>0,00</p> 
					</div>

					<div>
						<div>Total Extrato :</div> <p>0,00</p> 
					</div>
				</BoxTwo>
			</FinancialData>

			<Status>
				<div style={{ display: 'flex', gap: 10 }} >
					<Block>
						<Blue></Blue> <p>Crédito</p>
					</Block>

					<Block>
						<Red></Red> <p>Débito</p>
					</Block>

					<Block>
						<Grey></Grey> <p>Conciliado</p>
					</Block>
				</div>

				<div style={{ display: 'flex', gap: 5 }} >
					<FinalBalance>Saldo Final: </FinalBalance>

					<Value>0,00</Value>
				</div>
			</Status>
		</>
	)
}