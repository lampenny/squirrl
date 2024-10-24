import LoginForm from "../ui/login/loginform";

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <LoginForm />
    </div>
  );
}
