const usersTable = new sst.aws.Dynamo("MetarankUsers", {
  fields: {
    userId: "string",
  },
  primaryIndex: { hashKey: "userId" },
});

const usageSnapshotsTable = new sst.aws.Dynamo("MetarankUsageSnapshots", {
  fields: {
    projectId: "string",
    period: "string",
  },
  primaryIndex: { hashKey: "projectId", rangeKey: "period" },
});

const billingTable = new sst.aws.Dynamo("MetarankBillingTable", {
  fields: {
    userId: "string",
  },
  primaryIndex: { hashKey: "userId" },
});

export { usersTable, usageSnapshotsTable, billingTable };
