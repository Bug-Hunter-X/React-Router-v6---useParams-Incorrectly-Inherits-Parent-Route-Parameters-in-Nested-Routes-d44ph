The solution is to ensure that each route component uses `useParams` to access only its parameters. We can refactor the code to include the `parentId` parameter within the child route's path, making it explicit that the `childId` parameter is only available within the child route.

```javascript
// Parent Route
function ParentRoute() {
  let { parentId } = useParams();
  return (
    <div>
      <h1>Parent {parentId}</h1>
      <Routes>
        <Route path={`${parentId}/:childId`} element={<ChildRoute />} />
      </Routes>
    </div>
  );
}

// Child Route
function ChildRoute() {
  let { childId } = useParams(); // Now correctly gets the childId
  let { parentId } = useParams(); // Now correctly gets the parentId from nested path
  return (
    <div>
      <h2>Parent ID: {parentId}, Child ID: {childId}</h2>
    </div>
  );
}
```
Alternatively, use the `Outlet` component to access nested routes.
This is a more robust way to resolve this type of issue. 