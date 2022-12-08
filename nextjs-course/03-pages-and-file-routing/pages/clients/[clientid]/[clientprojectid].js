import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>Client: {router.query.clientid}</h1>
      <h2>Project: {router.query.clientprojectid}</h2>
    </div>
  );
}

export default SelectedClientProjectPage;
