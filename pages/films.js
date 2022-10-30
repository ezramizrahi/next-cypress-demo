import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default () => {
    return (
        <div>
            <a href='https://www.youtube.com/watch?v=5qap5aO4i9A'>LoFi Music</a>
        </div>
    );
};

export const getServerSideProps = withPageAuthRequired();