import {
  extractParams,
  extractReduce,
  extractSplit,
} from "./spotifyParameters";

const exampleUrl = "http://localhost:3000/#name=homer&food=floorpie";
const complexExampleUrl =
  "http://localhost:3000/#access_token=q2f57hq29035h-273590hq790b7-85j9458g7k905-f8k7590k&token_type=Bearer&expires_in=3600";

const exampleUrlParameters = {
  name: "homer",
  food: "floorpie",
};

const complexExampleUrlParameters = {
  access_token: "q2f57hq29035h-273590hq790b7-85j9458g7k905-f8k7590k",
  token_type: "Bearer",
  expires_in: "3600",
};

test("extract params extracts url parameters into object", () => {
  expect(extractParams(exampleUrl)).toStrictEqual(exampleUrlParameters);
  expect(extractParams(complexExampleUrl)).toStrictEqual(
    complexExampleUrlParameters
  );
});

test("extract split extract url parameters into object", () => {
  expect(extractSplit(exampleUrl)).toStrictEqual(exampleUrlParameters);
  expect(extractSplit(complexExampleUrl)).toStrictEqual(
    complexExampleUrlParameters
  );
});

test.skip("extract reduce extracts url parameters into object", () => {
  expect(extractReduce(exampleUrl)).toStrictEqual(exampleUrlParameters);
  expect(extractReduce(complexExampleUrl)).toStrictEqual(
    complexExampleUrlParameters
  );
});
