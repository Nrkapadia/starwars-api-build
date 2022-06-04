import styled from "styled-components";

function SocialLink({image, id}) {
  return (
    <>
    {
    id===1 &&
    <Link target="_" href="https://www.facebook.com/StarWars" image={image}>
      <span />
    </Link>
    }
    {
    id===2 &&
    <Link target="_" href="https://www.instagram.com/starwars/" image={image}>
      <span />
    </Link>
    }
    {
    id===3 &&
    <Link target="_" href="https://twitter.com/starwars" image={image}>
      <span />
    </Link>
    }
    {
    id===4 &&
    <Link target="_" href="https://www.youtube.com/user/starwars" image={image}>
      <span />
    </Link>
    }
    </>
  );
}

export default SocialLink;

const Link = styled.a`
  transition: background-color 350ms;

  :hover > span {
    background-color: #ccc;
  }

  > span {
    display: block;
    background-color: #999;
    height: 21px;
    width: 21px;
    mask: ${(props) =>
      props.image && "url(" + props.image + ") no-repeat 50% 50%"};
    transition: background-color 350ms;
  }
`;