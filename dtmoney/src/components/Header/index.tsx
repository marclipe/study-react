import logoImg from '../../assets/logo.svg'
import { ContainerHeader, Content } from './styles'

export function Header(){
  return (
    <ContainerHeader>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova transação</button>
      </Content>
    </ContainerHeader>
  );
}