//namespaceの挙動の確認
namespace Mynamespace {
  export type User = {
    name: string;
  };
}
namespace Namespace {
  export type User = {
    age: number;
  };
}

type ruu = Mynamespace.User;
type ree = Namespace.User;
//namespaceで定義したものは同名の場合、中で定義したものは名前は被ってはいけないけどnamespaceの名前が被らない限りは大丈夫

namespace Scope {
  export interface Name {
    name: string;
  }
}

namespace Scope {
  export interface Name {
    age: number;
  }
}

type Woo = Scope.Name["age"] //namespaceとinterfaceを利用すれば名前空間をマージすることができる