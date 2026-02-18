const usersTable = new sst.aws.Dynamo("AIMUsers", {
  fields: {
    userId: "string",
  },
  primaryIndex: { hashKey: "userId" },
});

const usageSnapshotsTable = new sst.aws.Dynamo("AIMUsageSnapshots", {
  fields: {
    projectId: "string",
    period: "string",
  },
  primaryIndex: { hashKey: "projectId", rangeKey: "period" },
});

const billingTable = new sst.aws.Dynamo("BillingTable", {
  fields: {
    userId: "string",
  },
  primaryIndex: { hashKey: "userId" },
});

export { usersTable, usageSnapshotsTable, billingTable };
