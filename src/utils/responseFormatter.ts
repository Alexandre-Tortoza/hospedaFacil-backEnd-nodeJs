function formatResponse(data: any, statusCode: number, message: string) {
  return {
    statusCode,
    message,
    data,
  };
}
export default formatResponse;
