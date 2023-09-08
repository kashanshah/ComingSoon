import Layout from "../src/components/Layout";
import {SocialLinks} from "../src/components/SocialLinks";
import {toast} from "react-toastify";
import {useState} from "react";

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    if(isLoading) {
      return;
    }

    const myForm = event.target;
    const formData = new FormData(myForm);

    setIsLoading(true);
    fetch("/", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        toast("Form successfully submitted", {type: "success"});
        setIsLoading(false);
        (document.getElementById("waitlist-form") as HTMLFormElement).reset();
      })
      .catch((error) => alert(error));
  };

  return (
    <Layout title="Coming Soon - KAZOMO">
      <img
        src="/images/xera.svg"
        alt="Kazomo "
        className="absolute h-96 -top-20 -right-16 lg:right-5 lg:top-10 animate-blob"
      />
      <img
        src="/images/shapes.svg"
        alt="hero"
        className="absolute w-full left-24 bottom-24 animate-blob2"
      />
      <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900">
        <div className="text-center space-y-10">
          {/*<h3 className="font-light text-xl uppercase tracking-wider">*/}
          {/*  Coming soon*/}
          {/*</h3>*/}
          <h1 className="text-7xl lg:text-9xl font-extrabold">
            <img src="/images/logo.png" alt="Kazomo" className="img-fluid"/>
          </h1>
          <p className="text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto">
            We are ready to fly!
          </p>
        </div>
        <form className="relative z-10 mx-10 lg:max-w-xl lg:mx-auto" data-netlify="true" id='waitlist-form' name='waitlist-form' method='POST' onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="waitlist-form"/>
          <input
            required
            type="email"
            name="email"
            readOnly={isLoading}
            placeholder="kazomo@gmail.com"
            className="w-full text-2xl font-light text-gray-900 placeholder-gray-500 py-5 pl-5 pr-36 lg:pr-44 rounded-xl"
          />
          <button disabled={isLoading} type="submit"
                  className="absolute top-1 right-1 bottom-1 px-4 lg:px-10 text-xl font-semibold bg-gray-900 text-white rounded-xl transition ease-in-out duration-500 hover:bg-red-500">
            Notify me
          </button>
        </form>
      </div>
      <div className="absolute bottom-5">
        <SocialLinks/>
      </div>
    </Layout>
  );
}
export default IndexPage;
