const usersTable = new sst.aws.Dynamo("MetarankUsers", {
  fields: {
    userId: "string",
  },
  primaryIndex: { hashKey: "userId" },
});

const apiKeysTable = new sst.aws.Dynamo("MetarankApiKeys", {
  fields: {
    keyHash: "string",
    userId: "string",
  },
  primaryIndex: { hashKey: "keyHash" },
  globalIndexes: {
    byUser: { hashKey: "userId" }
  }
});

const usageSnapshotsTable = new sst.aws.Dynamo("MetarankUsageSnapshots", {
  fields: {
    userId: "string",
    period: "string",
  },
  primaryIndex: { hashKey: "userId", rangeKey: "period" },
});

const seoCacheTable = new sst.aws.Dynamo('MetarankSeoCache', {
	fields: {
		cacheKey: 'string'
	},
	primaryIndex: { hashKey: 'cacheKey' },
	ttl: 'ttl'
});

const billingTable = new sst.aws.Dynamo("MetarankBillingTable", {
  fields: {
    userId: "string",
  },
  primaryIndex: { hashKey: "userId" },
});

export { usersTable, apiKeysTable, usageSnapshotsTable, seoCacheTable, billingTable };