import { MethodPaymentSelection, PaymentContainer } from './styles'
import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { useState } from 'react'

export function PaymentMethod() {
  const [method, setMethod] = useState<'money' | 'debit' | 'credit' | null>(
    null,
  )

  function handleUpdatePaymentMethod(method: 'money' | 'debit' | 'credit') {
    setMethod(method)
  }
  return (
    <PaymentContainer>
      <header>
        <CurrencyDollar size={22} />
        <div>
          <strong>Pagamento</strong>
          <span>
            O pagamento é feito da entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </header>
      <MethodPaymentSelection method={method}>
        <a
          onClick={() => handleUpdatePaymentMethod('credit')}
          className="credit"
        >
          <CreditCard size={16} />
          CARTÃO DE CRÉDITO
        </a>
        <a onClick={() => handleUpdatePaymentMethod('debit')} className="debit">
          <Bank size={16} />
          CARTÃO DE DÉBITO
        </a>
        <a onClick={() => handleUpdatePaymentMethod('money')} className="money">
          <Money size={16} />
          DINHEIRO
        </a>
      </MethodPaymentSelection>
    </PaymentContainer>
  )
}
