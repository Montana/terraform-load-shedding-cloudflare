import * as pulumi from "@pulumi/pulumi";
import * as cloudflare from "@pulumi/cloudflare";

const foo = new cloudflare.LoadBalancerPool("foo", {
    description: "example load balancer pool",
    enabled: false,
    latitude: 55,
    loadSheddings: [{
        defaultPercent: 55,
        defaultPolicy: "random",
        sessionPercent: 12,
        sessionPolicy: "hash",
    }],
    longitude: -12,
    minimumOrigins: 1,
    name: "example-pool",
    notificationEmail: "someone@example.com",
    originSteerings: [{
        policy: "random",
    }],
    origins: [
        {
            address: "192.0.2.1",
            enabled: false,
            headers: [{
                header: "Host",
                values: ["example-1"],
            }],
            name: "example-1",
        },
        {
            address: "192.0.2.2",
            headers: [{
                header: "Host",
                values: ["example-2"],
            }],
            name: "example-2",
        },
    ],
});
