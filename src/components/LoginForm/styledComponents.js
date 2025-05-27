import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #e0e7ff, #f0f4ff);
  padding: 20px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  }
`

export const LoginLogo = styled.img`
  width: 180px;
  align-self: center;
  margin-bottom: 20px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: #334155;
  font-weight: 500;
`

export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  color: #1e293b;
  outline: none;
  padding: 10px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 6px;
  margin-top: 6px;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
  }
`

export const LoginButton = styled.button`
  width: 100%;
  background-color: #4f46e5;
  border: none;
  border-radius: 6px;
  font-family: 'Roboto';
  font-size: 16px;
  height: 36px;
  color: #ffffff;
  margin-top: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4338ca;
  }

  &:active {
    background-color: #3730a3;
  }
`

export const SubmitError = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: #ff0b37;
  margin-top: 8px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  cursor: pointer;
`

export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #1e293b;
  cursor: pointer;
  user-select: none;
`
