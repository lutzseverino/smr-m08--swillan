import { useNavigate, useParams } from "react-router-dom";

export const withNavigation = (Component: any) => {
  return (props: JSX.IntrinsicAttributes) => (
    <Component {...props} navigate={useNavigate()} />
  );
};

export const withParams = (Component: any) => {
  return (props: JSX.IntrinsicAttributes) => (
    <Component {...props} params={useParams()} />
  );
};
