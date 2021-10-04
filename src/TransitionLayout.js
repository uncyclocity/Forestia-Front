import { useRouter } from 'next/router';
import { TransitionGroup, Transition } from 'react-transition-group';

const TIMEOUT = 200;
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    transform: `translateY(10px)`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms linear, transform ${TIMEOUT}ms linear`,
    transform: `translateY(0px)`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms linear, transform ${TIMEOUT}ms linear`,
    transform: `translateY(10px)`,
    opacity: 0,
  },
};

export default function TransitionLayout({ children }) {
  const router = useRouter();

  return (
    <TransitionGroup>
      <Transition
        key={router.pathname}
        timeout={{ enter: TIMEOUT, exit: TIMEOUT }}
      >
        {(status) => (
          <div style={{ ...getTransitionStyles[status] }}>{children}</div>
        )}
      </Transition>
    </TransitionGroup>
  );
}
