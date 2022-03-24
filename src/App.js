import { useState } from 'react';
import Button from './components/button/Button'
import Toast from './components/toast/Toast'
import styles from './App.module.css'

function App() {
  const [list, setList] = useState([]);
  let toastProperties = null;

  const showToast = type => {
    switch(type) {
      case 'success':
        toastProperties = {
          id: list.length+1,
          title: 'Success',
          description: 'Do you want to Confirm?',
          backgroundColor: '#5cb85c'
        }
        break;
      case 'error':
        toastProperties = {
          id: list.length+1,
          title: 'Error',
          description: 'Oops! An Error Occured',
          backgroundColor: '#d9534f'
        }
        break;
      case 'info':
        toastProperties = {
          id: list.length+1,
          title: 'Info',
          description: 'This is a info toast component',
          backgroundColor: '#5bc0de'
        }
        break;
      default:
        toastProperties = [];
    }
    setList([...list, toastProperties]);
  };

  return (
    <div className={styles.root}>
      <h1>Notification Toast</h1>
      <div className={styles.buttons}>
        <Button handleClick={() => showToast('success')}>Success</Button>
        <Button handleClick={() => showToast('error')}>Error</Button>
        <Button handleClick={() => showToast('info')}>Info</Button>
      </div>
      <Toast toastlist={list} position="buttom-right" setList={setList} />
    </div>
  );
}

export default App;
