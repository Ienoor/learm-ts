interface Payment {
  sum: number;
  from: number;
  to: number;
}

enum PaymentStatus {
  Success = 'success',
  Failed = 'failed',
}

interface PaymentRequest extends Payment {
  sum: 10000;
  from: 4;
  to: 2;
}

interface DataSuccess extends Payment {
  databaseId: number;
}

interface DataFailed {
  errorMessage: string;
  errorCode: number;
}

interface ResponseSuccess {
  status: PaymentStatus.Success;
  data: DataSuccess;
}

interface ResponseFailed {
  status: PaymentStatus.Failed;
  data: DataFailed;
}
