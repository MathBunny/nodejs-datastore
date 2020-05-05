// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as datastoreModule from '../src';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (instance.constructor as typeof protobuf.Message).toObject(
    instance as protobuf.Message<T>,
    {defaults: true}
  );
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

describe('v1.DatastoreClient', () => {
  it('has servicePath', () => {
    const servicePath = datastoreModule.v1.DatastoreClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = datastoreModule.v1.DatastoreClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = datastoreModule.v1.DatastoreClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new datastoreModule.v1.DatastoreClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new datastoreModule.v1.DatastoreClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new datastoreModule.v1.DatastoreClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.datastoreStub, undefined);
    await client.initialize();
    assert(client.datastoreStub);
  });

  it('has close method', () => {
    const client = new datastoreModule.v1.DatastoreClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new datastoreModule.v1.DatastoreClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new datastoreModule.v1.DatastoreClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('lookup', () => {
    it('invokes lookup without error', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.LookupRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.datastore.v1.LookupResponse()
      );
      client.innerApiCalls.lookup = stubSimpleCall(expectedResponse);
      const [response] = await client.lookup(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.lookup as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes lookup without error using callback', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.LookupRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.datastore.v1.LookupResponse()
      );
      client.innerApiCalls.lookup = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.lookup(
          request,
          (
            err?: Error | null,
            result?: protos.google.datastore.v1.ILookupResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.lookup as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes lookup with error', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.LookupRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.lookup = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.lookup(request), expectedError);
      assert(
        (client.innerApiCalls.lookup as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('runQuery', () => {
    it('invokes runQuery without error', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.RunQueryRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.datastore.v1.RunQueryResponse()
      );
      client.innerApiCalls.runQuery = stubSimpleCall(expectedResponse);
      const [response] = await client.runQuery(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.runQuery as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes runQuery without error using callback', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.RunQueryRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.datastore.v1.RunQueryResponse()
      );
      client.innerApiCalls.runQuery = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.runQuery(
          request,
          (
            err?: Error | null,
            result?: protos.google.datastore.v1.IRunQueryResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.runQuery as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes runQuery with error', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.RunQueryRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.runQuery = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.runQuery(request), expectedError);
      assert(
        (client.innerApiCalls.runQuery as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('beginTransaction', () => {
    it('invokes beginTransaction without error', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.BeginTransactionRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.datastore.v1.BeginTransactionResponse()
      );
      client.innerApiCalls.beginTransaction = stubSimpleCall(expectedResponse);
      const [response] = await client.beginTransaction(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.beginTransaction as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes beginTransaction without error using callback', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.BeginTransactionRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.datastore.v1.BeginTransactionResponse()
      );
      client.innerApiCalls.beginTransaction = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.beginTransaction(
          request,
          (
            err?: Error | null,
            result?: protos.google.datastore.v1.IBeginTransactionResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.beginTransaction as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes beginTransaction with error', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.BeginTransactionRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.beginTransaction = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.beginTransaction(request), expectedError);
      assert(
        (client.innerApiCalls.beginTransaction as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('commit', () => {
    it('invokes commit without error', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.CommitRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.datastore.v1.CommitResponse()
      );
      client.innerApiCalls.commit = stubSimpleCall(expectedResponse);
      const [response] = await client.commit(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.commit as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes commit without error using callback', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.CommitRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.datastore.v1.CommitResponse()
      );
      client.innerApiCalls.commit = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.commit(
          request,
          (
            err?: Error | null,
            result?: protos.google.datastore.v1.ICommitResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.commit as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes commit with error', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.CommitRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.commit = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.commit(request), expectedError);
      assert(
        (client.innerApiCalls.commit as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('rollback', () => {
    it('invokes rollback without error', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.RollbackRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.datastore.v1.RollbackResponse()
      );
      client.innerApiCalls.rollback = stubSimpleCall(expectedResponse);
      const [response] = await client.rollback(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.rollback as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes rollback without error using callback', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.RollbackRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.datastore.v1.RollbackResponse()
      );
      client.innerApiCalls.rollback = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.rollback(
          request,
          (
            err?: Error | null,
            result?: protos.google.datastore.v1.IRollbackResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.rollback as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes rollback with error', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.RollbackRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.rollback = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.rollback(request), expectedError);
      assert(
        (client.innerApiCalls.rollback as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('allocateIds', () => {
    it('invokes allocateIds without error', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.AllocateIdsRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.datastore.v1.AllocateIdsResponse()
      );
      client.innerApiCalls.allocateIds = stubSimpleCall(expectedResponse);
      const [response] = await client.allocateIds(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.allocateIds as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes allocateIds without error using callback', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.AllocateIdsRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.datastore.v1.AllocateIdsResponse()
      );
      client.innerApiCalls.allocateIds = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.allocateIds(
          request,
          (
            err?: Error | null,
            result?: protos.google.datastore.v1.IAllocateIdsResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.allocateIds as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes allocateIds with error', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.AllocateIdsRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.allocateIds = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.allocateIds(request), expectedError);
      assert(
        (client.innerApiCalls.allocateIds as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('reserveIds', () => {
    it('invokes reserveIds without error', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.ReserveIdsRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.datastore.v1.ReserveIdsResponse()
      );
      client.innerApiCalls.reserveIds = stubSimpleCall(expectedResponse);
      const [response] = await client.reserveIds(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.reserveIds as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes reserveIds without error using callback', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.ReserveIdsRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.datastore.v1.ReserveIdsResponse()
      );
      client.innerApiCalls.reserveIds = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.reserveIds(
          request,
          (
            err?: Error | null,
            result?: protos.google.datastore.v1.IReserveIdsResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.reserveIds as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes reserveIds with error', async () => {
      const client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.datastore.v1.ReserveIdsRequest()
      );
      request.projectId = '';
      const expectedHeaderRequestParams = 'project_id=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.reserveIds = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.reserveIds(request), expectedError);
      assert(
        (client.innerApiCalls.reserveIds as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });
});
