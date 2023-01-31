import React from 'react';
import WsoTypeA from '../components/Login/WsoTypeA';
import WsoTypeB from '../components/Login/WsoTypeB';
import ChoicesPage from '../components/Login/ChoicesPage';
import WelcomeMessage from '../components/Login/WelcomeMessage';
export default function LoginPhone() {
  const [Selected, setSelect] = React.useState<number>(0);
  if (Selected === 0) {
    return <ChoicesPage onSelect={(e) => setSelect(e)} />;
  } else if (Selected === 1) {
    return <WsoTypeA onSelect={(e) => setSelect(e)} />;
  } else if (Selected === 2) {
    return <WsoTypeB onSelect={(e) => setSelect(e)} />;
  } else {
    return <WelcomeMessage />;
  }
}
