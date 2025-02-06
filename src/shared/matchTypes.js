const matchTypes = (type) => {
  switch (type) {
    case '풀':
      return 'grass';

    case '독':
      return 'poison';

    case '불꽃':
      return 'fire';

    case '비행':
      return 'fly';

    case '물':
      return 'water';

    case '벌레':
      return 'bug';

    case '전기':
      return 'electric';

    case '땅':
      return 'earth';

    case '페어리':
      return 'fairy';

    case '격투':
      return 'fight';

    case '에스퍼':
      return 'psychic';

    case '얼음':
      return 'ice';

    case '고스트':
      return 'ghost';

    case '바위':
      return 'rock';

    case '드래곤':
      return 'dragon';

    default:
      return 'normal';
  }
};

export default matchTypes;
