import { Helmet } from 'react-helmet';
import Fireplace from '../components/fireplace';
import * as S from './notFound.styled';

const NotFound: React.FC = () => {
  return (
    <S.MainContainer>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Fireplace />
    </S.MainContainer>
  );
};

export default NotFound;
