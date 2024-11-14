import React, { useEffect } from 'react';

export const LoginForm = ({ onSubmit }) => {
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(id, password);
    setId('');
    setPassword('');
    setIsDisabled(true);
  }

  function handleChangeUsername(event) {
    setId(event.target.value.toLowerCase());
  }

  function handleChangePassword(event) {
    setPassword(event.target.value.toLowerCase());
  }

  useEffect(() => {
    if (password !== '' && id !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [id, password]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username-input">id:</label>
        <input
          id="id-input"
          type="text"
          onChange={handleChangeUsername}
          value={id}
        />
      </div>
      <div>
        <label htmlFor="password-input">Password:</label>
        <input
          id="password-input"
          type="password"
          onChange={handleChangePassword}
          value={password}
        />
      </div>
      <button id="login-button" type="submit" disabled={isDisabled}>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
