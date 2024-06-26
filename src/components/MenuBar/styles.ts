import styled, { css } from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import { Close } from '../../assets/Icons'

import {
  Home,
  Email,
  Notifications,
  FavoriteBorder,
  Person,
  ExitToApp
} from '../../assets/Icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  position: sticky;
  top: 0;
  left: 0;

  max-height: 100vh;
  overflow-y: auto;
  @media (max-width: 550px) {
    display: none;
  }
  @media (max-width: 1000px) {
    align-items: center;
    width: 8%;
    flex-shrink: 0;
  }

  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  ::webkit-scrollbar {
    display: none;
  }
`
export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 40px;
  position: relative;
  span {
    font-size: 19px;
    white-space: nowrap;
  }
  @media (max-width: 1000px) {
    align-items: center;
    span {
      display: none;
    }
  }

  @media (max-width: 550px) {
    display: none;
    margin
  }
`
export const Logo = styled.div`
  margin-top: 10px;
  margin-bottom: 24px;
`
export const MenuButtom = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 36px;
  cursor: pointer;
  border-radius: 25px;
  padding: 6px 10px;
  span {
    background: transparent;
  }

  &:hover {
    background: ${cores.cinza_escuro};
  }

  &.active {
    span {
      color: ${cores.azul};
      background: transparent;
    }
  }
  @media (max-width: 1000px) {
    width: 78%;
  }
`

const IconCSS = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  margin-right: 18px;
  background: transparent;
  fill: ${cores.branca};

  &.active {
    fill: ${cores.azul};
  }
`
export const HomeIcon = styled(Home)`
  ${IconCSS}
  &:hover {
    background: blue;
  }
`
export const NotificationIcon = styled(Notifications)`
  ${IconCSS}
`
export const MessageIcon = styled(Email)`
  ${IconCSS}
`
export const FavoriteIcon = styled(FavoriteBorder)`
  ${IconCSS}
`
export const UserIcon = styled(Person)`
  ${IconCSS}
`
export const TweetarButton = styled(ButtonContainer)`
  padding: 16px;
  font-size: 15px;
  width: 100%;
  @media (max-width: 1000px) {
    font-size: 0px;
    width: 36px;
    height: 36px;
  }
`
export const TweetarButton2 = styled(ButtonContainer)`
  position: fixed;
  background: ${cores.cinza_escuro};
  width: 45px;
  height: 45px;
  bottom: 40px;
  right: 25px;
  font-size: 50px;
  border-radius: 50px;
  display: none;
  &:hover {
    background: ${cores.azul};
    color: ${cores.cinza_escuro};
  }

  @media (max-width: 550px) {
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 28px;
  }
`

export const Bottomside = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  padding: 12px;
  margin-bottom: 25px;

  border-radius: 30px;
  &:hover {
    background: ${cores.cinza_escuro};
    h2 {
      background: ${cores.cinza_escuro};
    }
  }

  @media (max-width: 1000px) {
    width: 80%;
  }
`
export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  background: red;

  div {
    background: transparent;
  }

  img {
    object-fit: cover;
    border-radius: 20px;
    width: 40px;
    height: 40px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`

export const Profile = styled.div`
  margin-right: 10px;
  margin-left: 10px;
  h2 {
    font-size: 14px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`

const ExitCSS = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  fill: ${cores.branca};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    fill: ${cores.azul};
  }
  &.active {
    fill: ${cores.azul};
  }
`

export const ExitIcon = styled(ExitToApp)`
  ${ExitCSS}
`
export const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  display: none;
  background-color: rgba(255, 255, 255, 0.7);

  &.is-visible {
    display: flex;
    flex-direction: column;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  background: ${cores.cinza_escuro};
  border-radius: 25px;
  position: relative;
  z-index: 1;
  width: 50%;

  @media (max-width: 1000px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 95%;
  }
  @media (max-width: 334px) {
    flex-shrink: 0;
    width: 330px;
  }
`

const IconCSSClose = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  margin-right: 18px;
  background: ${cores.cinza_escuro};
  fill: black;
  cursor: pointer;

  &.active {
    fill: ${cores.azul};
  }
`
export const Icon = styled.div`
  width: 20px;
  margin-left: 10px;
  margin-top: 10px;
  a {
    background: ${cores.cinza_escuro};
  }
`
export const Form = styled.div`
  background: transparent;
  border-radius: 50px;
  height: 220px;
`
export const IconClose = styled(Close)`
  ${IconCSSClose}
  &:hover {
    fill: ${cores.azul_hover};
  }
`

export const Content = styled.div`
  background: ${cores.cinza_escuro};
  display: flex;
  width: 100%;
  padding: 8px 16px;
  margin-right: 10px;
  border-bottom: 1px solid ${cores.cinza};
`

export const AvatarPost = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  div {
    background: transparent;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
  }
`

export const InputGroup = styled.div`
  margin-top: 10px;
  background: ${cores.cinza_escuro};
  width: 100%;
  textarea {
    border: none;
    background: ${cores.cinza_escuro};
    margin-left: 9px;
    resize: none;
    padding: 2px;
    width: 100%;
    height: 100px;
  }
`

export const ImagePost = styled.div`
  display: flex;
  justify-content: space-between;
  background: transparent;
  margin-right: 24px;
  margin-left: 24px;
  padding: 16px;

  @media (max-width: 442px) {
    margin-right: 1px;
    margin-left: 2px;
    flex-direction: column;
  }
`

export const Choose = styled.div`
  background: ${cores.cinza_escuro};
  // input {
  //   display: none;
  // }
  label {
    background: ${cores.cinza_escuro};
  }
  img {
    cursor: pointer;
    background: ${cores.cinza_escuro};
  }
`
export const ButtonPost = styled.button`
  display: flex;
  align-items: center;
  padding: 16px;
  font-size: 16px;
  width: 80px;
  height: 36px;
  background: ${cores.cinza_escuro};
  @media (max-width: 442px) {
    margin-top: 8px;
    display: flex;
    align-itens: center;
  }
`
