export function useColumns() {
  const columns = [
    {
      label: "开发人员",
      cellRenderer: () => {
        return <el-tag size="small">江宁南区08B 306-1大师房</el-tag>;
      }
    },
    {
      label: "项目开始时间",
      cellRenderer: () => {
        return <el-tag size="small">2023-08-18</el-tag>;
      }
    }
  ];

  return {
    columns
  };
}
