async function AwaitComponent() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return <div>AwaitComponent</div>;
}

export default AwaitComponent;
