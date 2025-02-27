import { Button } from "../buttons/buttons";

export const Navigation = () => {
  return (
    <div className="bg-white py-4 px-5 d-flex justify-content-between border-bottom">
      <h2 className="m-0">LOGO</h2>
      <ul className="d-flex align-items-center gap-4 m-0">
        <l1>
          <a href="" className="text-decoration-none text-black">
            Our Features
          </a>
        </l1>
        <l1>
          <a href="" className="text-decoration-none text-black">
            Our Pricing
          </a>
        </l1>
        <l1>
          <Button buttonText="Signin" variant="primary" />
        </l1>
      </ul>
    </div>
  );
};

export default Navigation;
