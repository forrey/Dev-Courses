import { useRouter } from "next/router";

function ClientProjects() {
  const router = useRouter();

  function loadProjectHandler() {
    // load data...
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: router.query.clientid, clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>All Projects for {router.query.clientid}</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjects;
