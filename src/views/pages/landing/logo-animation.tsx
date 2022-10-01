import classNames from 'classnames/bind';
import styles from './LogoAnimation.module.scss';
import Headerlogo from 'ui-component/Headerlogo';
import Avatar from 'ui-component/extended/Avatar';

const cx = classNames.bind(styles);

function LogoAnimation() {
    return (
        <div className={cx('mic')}>
            <Avatar
                alt="MUI Logo"
                color="primary"
                sx={{
                    boxSizing: 'border-box',
                    background: 'transparent',
                    zIndex: 3,
                    width: '300px',
                    height: '300px',
                }}
                variant="rounded"
            >
                <Headerlogo />
            </Avatar>
            <div className={cx('mic-shadow')}></div>
        </div>
    );
}

export default LogoAnimation;
