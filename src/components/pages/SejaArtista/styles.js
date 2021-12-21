import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.5em;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 2em;
`;

export const CommentContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 3em;

  .rec-carousel {
    margin-top: 3em;
  }

  .rec-dot {
    box-shadow: 0 0 1px 2px var(--secondary-color);
  }

  .rec-dot_active {
    background-color: var(--primary-color);
    box-shadow: 0 0 1px 2px var(--secondary-color);
  }

  img {
    border-radius: 1em;
  }
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1em;
  
  p {
    font-style: italic;
  }
`;

// export const Item = styled.div`
//   width: 50%;
//   height: 200px;
//   padding: 1em;
//   border-radius: 1em;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   box-shadow: 0px 2px 5px rgba(0, 0, 0, .5);
// `;

