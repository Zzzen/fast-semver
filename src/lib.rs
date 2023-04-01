#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

#[cfg(not(all(target_os = "linux", target_env = "musl", target_arch = "aarch64")))]
#[global_allocator]
static ALLOC: mimalloc_rust::GlobalMiMalloc = mimalloc_rust::GlobalMiMalloc;

use semver::{Version, VersionReq};

#[napi]
pub fn satisfies(version: String, req: String) -> bool {
  VersionReq::parse(req.as_str())
    .and_then(|req| Version::parse(version.as_str()).map(|version| req.matches(&version)))
    .unwrap_or(false)
}
