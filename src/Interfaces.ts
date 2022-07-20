export interface ProductInterface {
  id: number;
  name: string;
  description: { support: string; }[];
  price: number;
  offPrice: number;
  discount: number;
  image: string;
  quantity?: number;
}
// ############
// ############
// ############





export interface AuthInterface {
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
  phoneNumber: string;
  token?: string;
  _id?: string;
}
// ############
// ############
// ############





export interface CartInterface {
  cart: ProductInterface[];
  total: number;
}
// ############
// ############
// ############





export interface InputComponentProps{
  label: string;
  name: string;
  formik: any;
  type?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}
// ############
// ############
// ############





export interface ProductComponentProps {
  product: ProductInterface;
  addProductHandler: (product: ProductInterface) => void;
}
// ############
// ############
// ############





export interface CartSummeryComponentProps {
  cart: any[];
  total: number;
}
// ############
// ############
// ############





export interface CartReducerActionProps {
  type: string;
  payload: any;
}
// ############
// ############
// ############





export interface CartReducerStateProps {
  cart: any[];
  total: number;
}
// ############
// ############
// ############





export interface LoginValues{
  email: string;
  password: string;
}
// ############
// ############
// ############





export interface SignupValues {
  confirmPassword: string;
  email: string;
  name: string;
  password: string;
  phoneNumber: string;
}
// ############
// ############
// ############