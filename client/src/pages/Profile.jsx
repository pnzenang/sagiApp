// import { FormRow, SubmitBtn } from "../components";
// import Wrapper from "../assets/wrappers/DashboardFormPage";
// import { useOutletContext, redirect } from "react-router-dom";
// import { Form } from "react-router-dom";
// import customFetch from "../utils/customFetch";
// import { toast } from "react-toastify";

// export const action =
//   (queryClient) =>
//   async ({ request }) => {
//     const formData = await request.formData();
//     const file = formData.get("avatar");
//     if (file && file.size > 500000) {
//       toast.error("Image size too large");
//       return null;
//     }
//     try {
//       await customFetch.patch("/users/update-user", formData);
//       queryClient.invalidateQueries(["user"]);
//       toast.success("Profile updated successfully");
//       return redirect("/dashboard");
//     } catch (error) {
//       toast.error(error?.response?.data?.msg);
//       return null;
//     }
//   };

// const Profile = () => {
//   const { user } = useOutletContext();

//   const {
//     associationName,
//     associationCode,
//     firstName,
//     email,
//     lastAndMiddleName,
//     telephoneNumber,
//     city,
//     state,
//   } = user;

//   return (
//     <Wrapper>
//       <Form method="post" className="form" encType="multipart/form-data">
//         <h4 className="form-title">profile</h4>
//         <div className="form-center">
//           <FormRow
//             type="text"
//             name="associationName"
//             defaultValue={associationName}
//             labelText="association's name"
//           />
//           <FormRow
//             type="text"
//             name="associationCode"
//             defaultValue={associationCode}
//             labelText="association's code"
//           />
//           <FormRow
//             type="text"
//             name="firstName"
//             labelText="delegate's first name"
//             defaultValue={firstName}
//           />
//           <FormRow
//             type="text"
//             name="lastAndMiddleName"
//             labelText="last and middle names"
//             defaultValue={lastAndMiddleName}
//           />
//           <FormRow type="email" name="email" defaultValue={email} />
//           <FormRow
//             type="text"
//             name="telephoneNumber"
//             labelText="telephone number"
//             defaultValue={telephoneNumber}
//           />
//           <FormRow type="text" name="city" defaultValue={city} />
//           <FormRow type="text" name="state" defaultValue={state} />
//           <SubmitBtn formBtn />
//         </div>
//       </Form>
//     </Wrapper>
//   );
// };
// export default Profile;
