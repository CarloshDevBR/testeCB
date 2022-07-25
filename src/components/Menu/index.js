import { useRef } from 'react'

import { useData } from '../../hooks/DataContext.js'

import { Toaster, toast } from 'react-hot-toast'

import api from '../../services/api.js'

import { Container, FinancialAccount, SearchBox, SearchBar, 
	DataReconciliation, MovementPeriod, BoxDate, Reconcile, Consult } from './styles.js'

import { FcSearch } from 'react-icons/fc'
import { ImBinoculars } from 'react-icons/im'
import { AiFillFileAdd } from 'react-icons/ai'

export const Menu = () => {
	const { putData } = useData()

	const dateOne = useRef()
	const dateTwo = useRef()

	function ConsultPeriod() {
		if(dateOne.current.value && dateTwo.current.value) {

			async function fetchData() {
				const res = await api.post('/listagem/', { 
					data_inicial: dateOne.current.value,
					data_final: dateTwo.current.value
				})

				putData(res.data)

				console.log(res.data)

				return res
			}
			
			const callFunction = fetchData()

			toast.promise(callFunction,
			   {
			    loading: 'Loading...',
			    success: `Carregado!`,
			    error: `Não encontrado!`,
			  },
			  {
			    style: {
			      minWidth: '150px',
			    },
			    success: {
			      duration: 5000,
			    },
			    error: {
			      duration: 3000,
			    },
			  }
			)

		} else {
			toast.error("Coloque as datas do Período de Movimento para consultar.")
		}
		
	}

	const filesElement = useRef();

    function sendFile(e) {
    	e.preventDefault()

	    async function fetchData() {
	    	const dataForm = new FormData()

		    for (const file of filesElement.current.files) {
		      dataForm.append('files', file)
		    }

	    	const headers = {
		    	'headers': {
		    		'Content-Type': 'application/json'
		    	}
	    	}

	    	const res = await api.post('/uploadfile/', dataForm, headers)
	    		.then(res => console.log(res))

	    	return res
	    }

	    const callFunction = fetchData()

	    toast.promise(callFunction,
			   {
			    loading: 'Loading...',
			    success: `Enviado com sucesso!`,
			    error: `Não foi possível fazer o envio!`,
			  },
			  {
			    style: {
			      minWidth: '150px',
			    },
			    success: {
			      duration: 5000,
			    },
			    error: {
			      duration: 3000,
			    },
			  }
		)
    }

	return (
		<Container>

			<Toaster
			  position="bottom-right"
			/>

			<FinancialAccount>
				<h3>Conta Financeira</h3>

				<SearchBox>
					<input type="search" />

					<button>{ <FcSearch style={{ width: 20 }} /> }</button>
				</SearchBox>

				<SearchBar type="search" name="myFile" />
			</FinancialAccount>

			<DataReconciliation>
				<h3>Data Conciliação</h3>

				<input type="date" />
			</DataReconciliation>

			<MovementPeriod>
				<h3>Período de Movimento</h3>

				<BoxDate>
					<input type="date" ref={dateOne} />
					
					<p>a</p>
					
					<input type="date" ref={dateTwo} />
				</BoxDate>

				<div>
					<label htmlFor="files"><AiFillFileAdd /></label> 
					<button onClick={sendFile} >Enviar</button>
					<input type="file" multiple id="files" style={{ display: 'none' }} ref={filesElement} />
				</div>
			</MovementPeriod>

			<Reconcile>
				<h3>Conciliar</h3>

					<select>
						<option>Movimento</option>
						<option>2</option>
						<option>3</option>
					</select>
				
			</Reconcile>

			<Consult onClick={ConsultPeriod} >
				<ImBinoculars />

				<p>Consultar</p>
			</Consult>

		</Container>
	)
}
