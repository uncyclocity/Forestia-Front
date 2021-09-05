import { VscError } from 'react-icons/vsc';

export default function NotFoundAlert() {
  return (
    <div className="errorcode">
      <div className="error_icon">
        <VscError />
      </div>
      &nbsp;404 Error
    </div>
  );
}
