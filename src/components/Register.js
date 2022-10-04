import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, sendingUserdata } from '../store/features/authSlice';
import { useEffect, useState } from 'react';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLogin, setIsLogin] = useState(false);
  const { user } = useSelector((state) => state.auth);

  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();




  useEffect(() => {
    if (!user) return;
    return navigate('/home');
  }, [user]);




  
  const onSubmit = (data) => {
    if (isLogin) {
      dispatch(loginRequest({ ...data, }));
      // return navigate('/home');
    } else {
      dispatch(sendingUserdata({ ...data,}));
    }
  };

  return (
    <Body>
      <SignMain>
        <SignUp>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormTitle>{isLogin ? 'Авторизация' : 'Регистрация'}</FormTitle>

            <Input
              placeholder="Укажите адрес электронной почты"
              type="email"
              {...register('email', {
                required: 'You have to type your Email',
                minLength: {
                  value: 5,
                  message: 'Minimum 5 symbol ',
                },
                pattern: /[A-Za-z]{3}/,
              })}
            />
            {errors?.email && (
              <ErrorInfo>{errors?.email.message || 'Error'}</ErrorInfo>
            )}

            <Input
              {...register('password', {
                required: 'Type minimum 6 number',
                minLength: {
                  value: 6,
                },
              })}
              type="password"
              placeholder="Введите пароль"
            />
            {errors.password && (
              <ErrorInfo>{errors?.password.message || 'Error'}</ErrorInfo>
            )}
            {isLogin ? (
              <LinkParagraph onClick={() => setIsLogin((prev) => !prev)}>
                Создать аккаунт
              </LinkParagraph>
            ) : (
              <LinkParagraph onClick={() => setIsLogin((prev) => !prev)}>
                Войти в аккаунт
              </LinkParagraph>
            )}
            <Button type="submit">
              {isLogin ? 'Авторизоватся' : 'регистрироваться'}{' '}
            </Button>
            <link rel="stylesheet" href="" />
            {/* <link to='/regitration'>Зарегистрируйся</link> */}
            <div style={{ color: 'red' }}></div>
          </form>
        </SignUp>
      </SignMain>
    </Body>
  );
}

export default Register;

const Body = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Jost', sans-serif;
  background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
`;

const FormTitle = styled.label`
  color: #fff;
  font-size: 2em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;
`;

const Input = styled.input`
  width: 60%;
  height: 20px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 20px;
  border: none;
  outline: none;
  border-radius: 5px;

  &&:focus {
    outline-color: rgb(0, 121, 191);
  }
  &&::placeholder {
    font-size: 13px;
  }
`;

const Button = styled.button`
  width: 60%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  background: #573b8a;
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
  &&:hover {
    background: #6d44b8;
  }
`;
const SignMain = styled.div`
  width: 350px;
  height: 500px;
  background: red;
  overflow: hidden;
  background: url('https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38')
    no-repeat center/ cover;
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
`;

const SignUp = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const ErrorInfo = styled.span`
  display: flex;
  justify-content: center;
  color: red;
  font-size: 14px;
`;

const LinkParagraph = styled.p`
  text-align: center;
`;
